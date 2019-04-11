import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

// a basic form
const NewsletterForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div>
      <input ref={node => (name = node)} type="text" placeholder="Nome"/>
      <input ref={node => (email = node)} type="email" placeholder="Email"/>
      
      <button className="button" onClick={submit}>
        Cadastrar
      </button>

			<div className="Newsletter__messages">
				{status === "sending" && <span className="text-grey">Cadastrando...</span>}
				{status === "error" && (
					<span
						className="text-red"
						dangerouslySetInnerHTML={{ __html: message }}
					/>
				)}
				{status === "success" && (
					<span
						className="text-green"
						dangerouslySetInnerHTML={{ __html: message }}
					/>
				)}
			</div>
    </div>
  );
};

class Newsletter extends React.Component {
	render() {
		const url = "//devreview.us4.list-manage.com/subscribe/post?u=6a4d9ba2e316a602f6aed6a1d&amp;id=1b2b890433";

		return (
			<div className="Newsletter">
				<h3 className="headline">Inscreva-se para receber novidades e dicas</h3>
				
				<MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <NewsletterForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
			</div>
		)
	}
}

export default Newsletter
