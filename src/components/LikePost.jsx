import HOC from './HOC';
function LikePost(props) {
  return (
    <div>
      <button onClick={props.click}>Like Post {props.text}</button>
    </div>
  )
}
export default HOC(LikePost)
