type GreetProps ={
    name:string
    messageCount?: number
    isLoggedIn: Boolean
}
export const Greet =(props:GreetProps) => {
    const { messageCount = 0 } = props
    return (
        <div>
            <h2>
               {
               props.isLoggedIn ? `Welcome ${props.name}! you have ${messageCount} messages`
               : 'Welcome Guest'
               }
               </h2>
                
        </div>
    )
}