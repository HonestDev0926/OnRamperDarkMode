/**
 * This function can be used to render a customized component that contains the combination of fields with a specific design.
 * Used to check if in the array of fields (allFields) is present a given combination of fields and if so, registers when it's added so the nexts iterations are not added twice
 * Returns true
 * @param currentField name of the field is being checked
 * @param fields2Check array of fields we are looking for
 * @param allFields array of fields all fields that should be rendered
 */
export declare const isGroupRequired: (currentField: string, fields2Check: string[], allFields: string[]) => boolean;
export declare const isGroupAdded: (fields2Check: string[]) => boolean;
export declare const initGroups: () => void;
