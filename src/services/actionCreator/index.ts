/*
    In real app I use some action creator
    which help to generate actions and run requests.
    It generate request action then run request after
    request it run success or failure action.
    F.e. in action functions it looks like

    export const bookAppointment = (data, forDependent, onSuccess) =>
    actionCreatorWithAuth(
        {
            url: `${GATEWAY_URL}appointments/appointments`,
            params: {
                data: mapBookAppointment(data, forDependent),
                method: 'post'
            },
            callbacks: {
                SUCCESS: onSuccess
            }
        },
        getDefaultActionsModel(BOOK_TIME_SLOT)
    )

    url - service
    params - request params
    callbacks - run smth after some action
    getDefaultActionsModel - generate actions constants f e
    {
        SUCCESS: 'BOOK_TIME_SLOT_SUCCESS',
        FAILURE: 'BOOK_TIME_SLOT_FAILURE',
        REQUEST: 'BOOK_TIME_SLOT_REQUEST',
    }

    actionCreatorWithAuth - reusable func which makes all magic :)
    run requests and dispatch actions
 */

export {}

