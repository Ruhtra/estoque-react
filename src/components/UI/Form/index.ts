import { FormInputSelect } from "./InputSelect/Form.InputSelect";
import { FormInputText } from "./InputText/Form.InputText";
import { FormSection } from "./Section/Form.Section";

export const Form = {
    Section: FormSection,
    Input: {
        Text: FormInputText,
        Select: FormInputSelect
    }
}