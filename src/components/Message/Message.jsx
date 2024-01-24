import '../Message/Message.scss'

function Message(props) {
  let a="gg"
  a=34
  return <div className="message">
    <div >שם פרטי:{props.myMessage.sdsdsd}</div>
    <div >שם משפחה{props.myMessage.lastName}</div>
    <div className="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
  </div>
}

export default Message