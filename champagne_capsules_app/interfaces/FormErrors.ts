interface GenericError {
    title: string
    message: string
  }
  
  interface FormFieldError {
    hasError: boolean
    inlineErrorMessage: string
    dirty?: boolean //Might use
  }
  
  interface FormFields {
    [field: string]: FormFieldError
  }
  
  export interface FormErrors {
    generic: GenericError
    fields: FormFields
  }
  