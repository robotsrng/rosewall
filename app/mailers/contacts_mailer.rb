class ContactsMailer < ApplicationMailer
  default from: "no-reply@rosewallpit.com"

  def general_message(contact)
    @contact = contact
    mail( :to => "meglettransport@gmail.com", :subject => "New Message from the Rosewall Pit Website.")
  end
end