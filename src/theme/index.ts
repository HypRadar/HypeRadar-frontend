import { extendTheme } from '@chakra-ui/react';  

export const THEME = {
    COLORS: {
        tableborder: "#E6E6E6", 
    }
}

export const theme = extendTheme({
    colors: {
        brand: {
            tableborder: "#E6E6E6",
        }
    },
    components: {
        Table: {
            variants: {
                simple: {
                    th: {
                        borderColor: "#E6E6E6",
                        borderBottomWidth: "2px"
                    },
                    td: {
                        borderColor: "#E6E6E6",
                        borderBottomWidth: "2px"
                    }
                }
            }
        },
    }
}); 