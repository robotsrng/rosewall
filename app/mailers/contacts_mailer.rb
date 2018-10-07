class ContactsMailer < ApplicationMailer
  default from: "shaneryanglass88@gmail.com"

  def general_message(contact)
    @contact = contact
    mail( :to => "test@allaboutspam.com", :subject => "You Have a Message From Your Website")
  end
end