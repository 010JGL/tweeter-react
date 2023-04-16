import React from 'react'; //optional
$( document ).ready(function() {
function TweetForm() {
  const text = "What are you humming about?"
  
  $("#newtweet__form").submit(function(handler) {
    handler.preventDefault();
  });
  return (
    <section className="newtweet">
      <form id="newtweet__form" method="post" action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={text}></textarea>
        <input type="submit" value="Tweet" className="form__input" />        
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}
})
export default TweetForm;