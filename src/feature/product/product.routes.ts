const baseUrl : string  ="/product/"
export const productRoutes = {
    ADD : `${baseUrl}`,
    GET_BY_ID : `${baseUrl}:id`,
    UPDATE :  `${baseUrl}:id`,
    DELETE :  `${baseUrl}:id`,
    LIST : `${baseUrl}list`,
    LIST_BY_CATEGORY : `${baseUrl}category/:categoryID`
}