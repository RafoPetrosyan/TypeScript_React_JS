export const actionMarker = (actionType: any, payload: any, callback: any) => {
    return {
        actionType,
        payload,
        callback
    }
}