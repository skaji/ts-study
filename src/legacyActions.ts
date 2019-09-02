type IncrementAction = {
    type: "INCREMENT"
}
type DecrementAction = {
    type: "DECREMENT"
}
type Actions = IncrementAction | DecrementAction

export default Actions