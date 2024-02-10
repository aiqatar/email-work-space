// this is the appointment reminder emails sent to the user and consultants

// reminder email to the user
let dynamicTemplateData = {
    greeting:
        emailData.userLanguage === 'en'
            ? `Dear ${emailData.userFirstName},`
            : `عزيزي ${emailData.userFirstName}،`,
    content1:
        emailData.userLanguage === 'en'
            ? 'This is the reminder for the Appoinetment!'
            : `تم حجز موعدك بنجاح!`,
    content2:
        emailData.userLanguage === 'en'
            ? `Consultant Name: ${
                  emailData.consultantFirstName +
                  ' ' +
                  emailData.consultantLastName
              }
            Consultant Phone Number: ${emailData.consultantPhone}
            ${
                emailData.consultantOfficePhone?.length
                    ? `Office Phone Number: ${emailData.consultantOfficePhone}`
                    : ''
            }`
            : `اسم المستشار: ${
                  emailData.consultantFirstNameAr +
                  ' ' +
                  emailData.consultantLastNameAr
              }
            رقم الهاتف: ${emailData.consultantPhone}
            ${
                emailData.consultantOfficePhone?.length
                    ? ` رقم الهاتف: ${emailData.consultantOfficePhone}`
                    : ''
            }`,
    content3:
        emailData.userLanguage === 'en'
            ? `Date ${emailData.date} at ${emailData.time}`
            : `تاريخ ${emailData.date} في ${emailData.time}`,

    content4:
        emailData.userLanguage === 'en'
            ? emailData.meetingMode === 'consultant office'
                ? 'Meeting Mode: Consultant Office'
                : 'Meeting Mode: Online'
            : emailData.meetingMode === 'consultant office'
            ? 'وضع الاجتماع: مكتب المستشار'
            : 'وضع الاجتماع: عبر الإنترنت',
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
            ? 'Appointment Reminder'
            : 'تم حجز الموعد بنجاح'
};

// ******************************* CONSULTANT ************************
// reminder email to the consultant

dynamicTemplateData = {
    greeting:
        emailData.consultantLanguage === 'en'
            ? `Dear ${emailData.consultantFirstName},`
            : `عزيزي ${emailData.consultantFirstNameAr}،`,
    content1:
        emailData.consultantLanguage === 'en'
            ? 'This is the reminder for the Appoinetment!'
            : `تم حجز موعدك بنجاح!`,
    content2:
        emailData.consultantLanguage === 'en'
            ? `User Name: ${
                  emailData.userFirstName + ' ' + emailData.userLastName
              }
        `
            : `اسم المستشار: ${
                  emailData.userFirstName + ' ' + emailData.userLastName
              }
           `,
    content3:
        emailData.consultantLanguage === 'en'
            ? `Date ${emailData.date} at ${emailData.time}`
            : `تاريخ ${emailData.date} في ${emailData.time}`,

    content4:
        emailData.consultantLanguage === 'en'
            ? emailData.meetingMode === 'consultant office'
                ? 'Meeting Mode: Consultant Office'
                : 'Meeting Mode: Online'
            : emailData.meetingMode === 'consultant office'
            ? 'وضع الاجتماع: مكتب المستشار'
            : 'وضع الاجتماع: عبر الإنترنت',
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
        emailData.consultantLanguage == 'en'
            ? 'Appointment Reminder'
            : 'تم حجز الموعد بنجاح'
};


