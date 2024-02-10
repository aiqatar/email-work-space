// these email will be when the appointment get updated/resheduled

// email to the user
let dynamicTemplateData = {
    greeting:
        emailData.userlanguage === 'en'
            ? `Dear ${emailData.userFirstName},`
            : `عزيزي ${emailData.userFirstName}،`,
    content1:
        emailData.userlanguage === 'en'
            ? `Your appointment has been been modified. Consultant Name: ${
                  emailData.consultantFirstName +
                  ' ' +
                  emailData.consultantLastName
              }.
                Consultant Phone Number: ${emailData.consultantPhone}
              ${
                  emailData.consultantOfficePhone?.length
                      ? `Office Phone Number: ${emailData.consultantOfficePhone}`
                      : ''
              }`
            : `تم حجز موعدك بنجاح! اسم المستشار: ${
                  emailData.consultantFirstNameAr +
                  ' ' +
                  emailData.consultantLastNameAr
              } رقم الهاتف: ${emailData.consultantPhone}
              
              ${
                  emailData.consultantOfficePhone?.length
                      ? ` رقم الهاتف: ${emailData.consultantOfficePhone}`
                      : ''
              }`,
    content2:
        emailData.userlanguage === 'en'
            ? `Old: ${emailData.oldDate} from ${emailData.oldTime}`
            : `القديم: ${emailData.oldDate} من ${emailData.oldTime}`,
    content3:
        emailData.userlanguage === 'en'
            ? `New: ${emailData.newDate} from ${emailData.newTime}`
            : `الجديد: ${emailData.newDate} من ${emailData.newTime}`,

    content4:
        emailData.userlanguage === 'en'
            ? emailData.meetingMode === 'consultant office'
                ? 'Meeting Mode: Consultant Office'
                : 'Meeting Mode: Online'
            : emailData.meetingMode === 'consultant office'
            ? 'وضع الاجتماع: مكتب المستشار'
            : 'وضع الاجتماع: عبر الإنترنت',
    content5:
        emailData.meetingMode === 'consultant office'
            ? `${emailData.office_formatted_address}` +
              (emailData.userlanguage === 'ar'
                  ? emailData.office_address_details_ar
                  : emailData.office_address_details)
            : emailData.userlanguage === 'en'
            ? `Meeting Link: ${this.meetingLink}`
            : `رابط الاجتماع: ${this.meetingLink}`,
    locationUrl:
        emailData.meetingMode === 'online'
            ? this.meetingLink
            : `https://www.google.com/maps/search/?api=1&query=${emailData.lat},${emailData.lng}`,
    subject:
        emailData.userlanguage === 'en'
            ? 'Appointment Modified!'
            : 'تم حجز الموعد بنجاح'
};

// *********************** CONSULTANT *********************

      // email sent to consultant
      dynamicTemplateData = {
        greeting:
            emailData.consultantLanguage === 'en'
                ? `Dear ${emailData.consultantFirstName},`
                : `عزيزي ${emailData.consultantFirstNameAr}،`,
        content1:
            emailData.consultantLanguage === 'en'
                ? `Your appointment has been been modified. User Name: ${
                      emailData.userFirstName + ' ' + emailData.userLastName
                  }`
                : `تم حجز موعدك بنجاح! اسم المستشار: ${
                      emailData.userFirstName + ' ' + emailData.userLastName
                  }`,
        content2:
            emailData.consultantLanguage === 'en'
                ? `Old: ${emailData.oldDate} from ${emailData.oldTime}`
                : `القديم: ${emailData.oldDate} من ${emailData.oldTime}`,
        content3:
            emailData.consultantLanguage === 'en'
                ? `New: ${emailData.newDate} from ${emailData.newTime}`
                : `الجديد: ${emailData.newDate} من ${emailData.newTime}`,

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
            emailData.consultantLanguage === 'en'
                ? 'Appointment Modified!'
                : 'تم حجز الموعد بنجاح'
    };

//  ********************** ADMIN ****************
        // send email to admin 
        dynamicTemplateData = {
            greeting: `Dear Admin,`,
            content1: `Appointment has been modified by the user, Name: ${
                emailData.userFirstName + ' ' + emailData.userLastName
            } and consultant Name: ${
                emailData.consultantFirstName + emailData.consultantLastName
            }
            Consultant Phone Number ${emailData.consultantPhone}
            ${
                emailData.consultantOfficePhone?.length
                    ? `Office Phone Number: ${emailData.consultantOfficePhone}`
                    : ''
            }
            `,
            content2: `Meeting Mode: ${
                emailData.meetingMode === 'consultant office'
                    ? 'Consultant Office'
                    : 'Online'
            }`,
            content3: `Old: ${emailData.oldDate} from ${emailData.oldTime}`,
            content4: `New: ${emailData.newDate} from ${emailData.newTime}`,
            content5:
                emailData.meetingMode === 'consultant office'
                    ? `${
                          emailData.office_formatted_address +
                          '_' +
                          emailData.office_address_details
                      }`
                    : `Meeting Link: ${this.meetingLink}`,
            locationUrl:
                emailData.meetingMode == 'online'
                    ? this.meetingLink
                    : `https://www.google.com/maps/search/?api=1&query=${emailData.lat},${emailData.lng}`,
            subject: 'Appointment Modified'
        };