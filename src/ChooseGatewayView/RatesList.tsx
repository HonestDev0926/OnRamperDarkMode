import React, { useState, useCallback, useContext } from 'react'
import styles from './styles.module.css'
import GatewayOption from './GatewayOption'
import type { badgeType } from './GatewayOption'
import { APIContext, GatewayRateOption, GatewayRateOptionSimple } from '../ApiContext'
import { documents } from '../ApiContext/api/constants'

interface RatesListProps {
    availableRates: GatewayRateOption[],
    unavailableRates: GatewayRateOption[],
    hiddenRates: GatewayRateOptionSimple[],
    onItemClick?: (index: number) => void
}

const RatesList: React.FC<RatesListProps> = (props) => {
    const availableRates: GatewayRateOption[] = props.availableRates
    const unavailableRates: GatewayRateOption[] = props.unavailableRates
    const _unavailableRates = unavailableRates.filter(ur => !ur.error?.type.match(/MIN|MAX/))
    const _minMaxUnavailableRates = unavailableRates.filter(ur => ur.error?.type.match(/MIN|MAX/))
    const { onItemClick = () => null } = props

    const { collected } = useContext(APIContext)
    const [selectedGatewayIndex, setSelectedGatewayIndex] = useState(0)

    const handleItemClick = useCallback((index: number, id: number) => {
        setSelectedGatewayIndex(index)
        onItemClick(id)
    }, [onItemClick])

    const reqIds = availableRates.reduce((acc, rate) => {
        const noId = (rate.requiredKYC ?? []).some(kyc => {
            if (typeof kyc === 'string')
                return documents.some(doc => doc === kyc)
            else
                return kyc.some(kycItem => documents.some(doc => doc === kycItem))
        })
        return {
            ...acc,
            [rate.identifier]: noId
        }
    }, {} as { [key: string]: boolean })

    const easiests = getArrOfMinsMaxs(availableRates.map((rate) => ({ name: rate.identifier, value: rate.requiredKYC?.length ?? Number.POSITIVE_INFINITY })), true)
    const fastest = getArrOfMinsMaxs(availableRates.map((rate) => ({ name: rate.identifier, value: rate.duration.seconds })), true)
    const defaultReceivedCrypto = collected.amountInCrypto ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY
    const bestOffers = getArrOfMinsMaxs(availableRates.map((rate) => ({ name: rate.identifier, value: rate.receivedCrypto ?? defaultReceivedCrypto })), collected.amountInCrypto??false)

    const badges = availableRates.reduce<badgeType>((acc, rate, index) => {
        const allbadges = {
            _id: index,
            noId: !reqIds[rate.identifier],
            fast: rate.duration.seconds <= 60 * 10,
            fastest: fastest.some(id => id === rate.identifier),
            easiest: easiests.some(id => id === rate.identifier),
            bestOffer: bestOffers.some(id => id === rate.identifier)
        }
        return {
            ...acc,
            [rate.identifier]: {
                ...allbadges,
                count: Object.values(allbadges).filter(Boolean).length
            }
        }
    }, {})

    const sortedAvailableRates = [...availableRates].sort((a, b) => {
        let res = 0//badges[b.identifier].count - badges[a.identifier].count
        if (res === 0) res = ((b.receivedCrypto ?? defaultReceivedCrypto) - (a.receivedCrypto ?? defaultReceivedCrypto)) * (collected.amountInCrypto ? -1 : 1)
        if (res === 0) res = a.duration.seconds - b.duration.seconds
        return res
    })

    return (
        <div className={`${styles['rates-list']}`}>{/* TODO: change all custom lists to general list */}
            {
                sortedAvailableRates.map((item, i) =>
                    <GatewayOption
                        key={i}
                        index={i}
                        isOpen={i === selectedGatewayIndex}
                        selectedReceivedCrypto={sortedAvailableRates[selectedGatewayIndex].receivedCrypto}
                        onClick={handleItemClick}
                        badges={badges}
                        {...item}
                    />
                )
            }
            {
                _minMaxUnavailableRates.map((item, i) =>
                    <GatewayOption
                        key={i}
                        index={i}
                        isOpen={false}
                        selectedReceivedCrypto={0}
                        {...item}
                    />
                )
            }
            {
                props.hiddenRates.map((item, i) =>
                    <GatewayOption
                        id={item.identifier}
                        name={item.identifier}
                        available={false}
                        duration={{seconds:0, message:""}}
                        key={i}
                        index={i}
                        isOpen={false}
                        selectedReceivedCrypto={0}
                        {...item}
                    />
                )
            }
            {
                _unavailableRates.map((item, i) =>
                    <GatewayOption
                        key={i}
                        index={i}
                        isOpen={false}
                        selectedReceivedCrypto={0}
                        {...item}
                    />
                )
            }
        </div>
    )
}

const getArrOfMinsMaxs = (list: { name: string, value: number }[], min: boolean) => {
    let lowest = min ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    let tmp;
    let easiests: string[] = []

    for (let i = list.length - 1; i >= 0; i--) {
        tmp = list[i].value;
        if (min) {
            if (tmp < lowest) {
                lowest = tmp;
                easiests = [list[i].name]
            }
            else if (tmp === lowest) {
                lowest = tmp;
                easiests.push(list[i].name)
            }
        }
        else {
            if (tmp > lowest) {
                lowest = tmp;
                easiests = [list[i].name]
            }
            else if (tmp === lowest) {
                lowest = tmp;
                easiests.push(list[i].name)
            }
        }
    }
    return easiests
}

export default RatesList
