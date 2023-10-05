import { createContext, useReducer, ReactNode } from 'react';


interface Vendor {
    id: number;
    name: string;
    cost: number;
    paid: number;
    dueDate: number;
  }


type State = {
    budget: number,
    vendors: Vendor[]
}

type Action = {
    type: string
    payload?: any
}

const AppReducer = (state: State, action: Action) => {
    switch(action.type) {
        case 'add_vendor':
            return {
                ...state,
                vendors: [...state.vendors, action.payload],
            };
            case 'delete_vendor':
                return {
                    ...state,
                    vendors: state.vendors.filter((vendor) => vendor.id !== action.payload
                    ),
                };
                case 'save_budget':
                    return {
                        ...state,
                        budget: action.payload,
                    };
        default: return state;
    }
}

const initialState = {
    budget: 100,
    vendors: [
        {id: 12, name: 'Drinks', cost: 10, paid: 5, difference: 5, dueDate: '10/25/2025' },
        {id: 13, name: 'Dessert', cost: 5, paid: 5, difference: 0, dueDate: '10/25/2025' },
        {id: 14, name: 'DJ', cost: 15, paid: 10, difference: 5, dueDate: '10/25/2025' },
    ]
};


export interface AppContextType {
    budget: number;
    vendors: Vendor[];
    dispatch: React.Dispatch<Action>;
  }

//@ts-expect-error
export const AppContext = createContext<AppContextType>();

interface AppProviderProps {
    children: ReactNode;
  }

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value ={{budget: state.budget, vendors: state.vendors, dispatch
    }}>
        {children}
    </AppContext.Provider>)
}