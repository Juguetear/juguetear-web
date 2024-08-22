export interface Fields {
  name: string;
  email: string;
  body: string;
}

export type Data = { validatedData: Fields };

export type Err = Record<keyof Fields, string> | null;

export type State = {
  data: Data;
  err: Err | null;
  showNotification: boolean;
};

export const initialState: State = {
  data: {
    validatedData: {
      name: "",
      email: "",
      body: "",
    },
  },
  err: null,
  showNotification: false,
};

export const handleFail = (
  prevState: State,
  showNotification: boolean,
  err: Err
): State => {
  return {
    ...prevState,
    err,
    showNotification,
  };
};

export const handleSuccess = (data: Data, showNotification: boolean): State => {
  return {
    data,
    err: null,
    showNotification,
  };
};
