import HOC from './HOC';
function LikeImage(props) {
  return (
    <div>
      <button onClick={props.click}>Like Image {props.text}</button>
    </div>
  )
}
export default HOC(LikeImage)