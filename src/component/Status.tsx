type StatusProps = {
    Status: 'Loading' | 'Success' | 'Error'
}
export const Status = (props: StatusProps) => {
    let message
    if (props.Status === 'Loading') {
        message = 'Loading Details'
    } else if (props.Status === 'Success') {
        message = 'Successfully loaded'
    } else if (props.Status === 'Error') {
        message = 'Error in loading'
    }
    return (
        <div>
            <h2>Status-{message}</h2>
        </div>
    )

}