class ContactsMailer < ApplicationMailer
  default from: "no-reply@rosewallpit.com"

  def general_message(contact)
    @contact = contact
    mail( :to => "shaneryanglass88@gmail.com", :subject => "You Have a Message From Your Website")
  end
end