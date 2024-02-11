//   these are the email will sent to the user,consultant,admin
  
  // this email will send to the user when he will book the appointment
  let dynamicTemplateData = {
    greeting:
        emailData.userLanguage === 'en'
            ? `Dear ${emailData.userFirstName},`
            : `عزيزي ${emailData.userFirstName}،`,
    content1:
        emailData.userLanguage === 'en'
            ? 'Your appointment has been booked successfully!'
            : `تم حجز موعدك بنجاح!`,
    content2:
        emailData.userLanguage === 'en'
            ? `Consultant Name: ${
                  emailData.consultantFirstName +
                  ' ' +
                  emailData.consultantLastName
              }.
                Consultant Phone: ${emailData.consultantPhone}
            ${
                emailData.consultantOfficePhone?.length
                    ? `Office Phone: ${emailData.consultantOfficePhone}`
                    : ''
            }`
            : `اسم المستشار: ${
                  emailData.consultantFirstNameAr +
                  ' ' +
                  emailData.consultantLastNameAr
              }
            هاتف المستشار : ${emailData.consultantPhone}
            ${
                emailData.consultantOfficePhone?.length
                    ? ` هاتف المكتب: ${emailData.consultantOfficePhone}`
                    : ''
            }`,
    content3:
        emailData.userLanguage === 'en'
            ? `Date ${emailData.date} at ${emailData.time}`
            : `التاريخ ${emailData.date} في ${emailData.time}`,

    content4:
        emailData.userLanguage === 'en'
            ? emailData.meetingMode === 'consultant office'
                ? 'Meeting Mode: Consultant Office'
                : 'Meeting Mode: Online'
            : emailData.meetingMode === 'consultant office'
            ? 'مكان الاجتماع: مكتب المستشار'
            : 'مكان الاجتماع: عبر الإنترنت',
    content5:
        emailData.meetingMode === 'consultant office'
            ? `${emailData.office_formatted_address}` +
              (emailData.userLanguage === 'ar'
                  ? emailData.office_address_details_ar
                  : emailData.office_address_details)
            : emailData.userLanguage === 'en'
            ? `Meeting Link: ${this.meetingLink}`
            : `رابط الاجتماع: ${this.meetingLink}`,
    locationUrl:
        emailData.meetingMode === 'online'
            ? this.meetingLink
            : `https://www.google.com/maps/search/?api=1&query=${emailData.lat},${emailData.lng}`,
    subject:
        emailData.userLanguage === 'en'
            ? 'Appointment Booked'
            : 'تم حجز الموعد بنجاح'
};


// ****************** CONSULTANT EMAIL ***************************
// THIS EMAILIS FOR  THE CONSULTANT
  //  sending email to the consutlant
  dynamicTemplateData = {
    greeting:
        emailData.consultantLanguage === 'en'
            ? `Dear ${emailData.consultantFirstName},`
            : `عزيزي ${emailData.consultantFirstNameAr}،`,
    content1:
        emailData.consultantLanguage === 'en'
            ? `You have a new Appointment!`
            : 'لديك موعد جديد!',
    content2:
        emailData.consultantLanguage === 'en'
            ? `Name : ${emailData.userFirstName} ${emailData.userLastName}`
            : `الاسم : ${emailData.userFirstName} ${emailData.userLastName}`,
    content3:
        emailData.consultantLanguage === 'en'
            ? `Date : ${emailData.date} at ${emailData.time}`
            : `التاريخ ${emailData.date} في ${emailData.time}`,

    content4:
        emailData.consultantLanguage === 'en'
            ? emailData.meetingMode === 'consultant office'
                ? 'Meeting Mode: Consultant Office'
                : 'Meeting Mode: Online'
            : emailData.meetingMode === 'consultant office'
            ? 'مكان الاجتماع: مكتب المستشار'
            : 'مكان الاجتماع: عبر الإنترنت',
    content5:
        emailData.meetingMode === 'consultant office'
            ? `${emailData.office_formatted_address}` +
              (emailData.consultantLanguage === 'ar'
                  ? emailData.office_address_details_ar
                  : emailData.office_address_details)
            : emailData.consultantLanguage === 'en'
            ? `Meeting Link: ${this.meetingLink}`
            : `رابط الاجتماع: ${this.meetingLink}`,
    locationUrl:
        emailData.meetingMode === 'online'
            ? this.meetingLink
            : `https://www.google.com/maps/search/?api=1&query=${emailData.lat},${emailData.lng}`,
    subject:
        emailData.consultantLanguage === 'en'
            ? 'New Appointment Booked'
            : 'تم حجز موعد استشارة'
};

// ********************** ADMIN EMIAL **************************
// THIS EMIAL WILL SENT TO ADMIN WHEN APPOINTMENT BOOKED SUCCESSFUL
dynamicTemplateData = {
    greeting: `Dear Admin,`,
    content1: `New appointment is booked`,
    content2: `Name: ${
        emailData.userFirstName + ' ' + emailData.userLastName
    } Consultant: ${
        emailData.consultantFirstName +
        ' ' +
        emailData.consultantLastName
    }.
    Consultant phone: ${emailData.consultantPhone}
    ${
        emailData.consultantOfficePhone?.length
            ? `Office phone: ${emailData.consultantOfficePhone}`
            : ''
    }`,
    content3: `Date ${emailData.date} at ${emailData.time}`,
    content4:
        emailData.meetingMode === 'consultant office'
            ? 'Meeting Mode: Consultant Office'
            : 'Meeting Mode: Online',
    content5:
        emailData.meetingMode === 'consultant office'
            ? `Meeting Location: ${emailData.office_formatted_address} - ${emailData.office_address_details}`
            : `Meeting Link: ${this.meetingLink}`,
    locationUrl:
        emailData.meetingMode === 'online'
            ? this.meetingLink
            : `https://www.google.com/maps/search/?api=1&query=${emailData.lat},${emailData.lng}`,
    subject: 'New Appointment Booked'
};
