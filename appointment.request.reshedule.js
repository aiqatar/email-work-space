// these email for requesting to the user for reschedule the appointment

// THIS EMAIL WILL SENT TO THE USER AS A REQUEST TO RESCHEDULE
      // email to the user
      let dynamicTemplateData = {
        greeting:
            emailData.userLanguage === 'en'
                ? `Dear ${emailData.userFirstName},`
                : `عزيزي ${emailData.userLastName}،`,
        content1:
            emailData.userLanguage === 'en'
                ? `Sorry! Your consultant has an emergency and can't attend the meeting. Please reschedule your appointment. The reason for the cancellation: ${emailData.note}`
                : `يعتذر المستشار عن حضور الموعد اليوم لظرف طارئ، الرجاء إعادة جدولة الموعد. سبب الإلغاء: ${emailData.note}`,
        content2:
            emailData.userLanguage === 'en'
                ? `Consultant Name: ${
                      emailData.consultantFirstName +
                      ' ' +
                      emailData.consultantLastName
                  }
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
             هاتف المستشار: ${emailData.consultantPhone}
            ${
                emailData.consultantOfficePhone?.length
                    ? ` هاتف المكتب : ${emailData.consultantOfficePhone}`
                    : ''
            }`,
        content3:
            emailData.userLanguage === 'en'
                ? `Date: ${emailData.date} at ${emailData.time}`
                : `التاريخ: ${emailData.date} من ${emailData.time}`,
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
                ? 'Action Required: Reschedule'
                : 'يعتذر المستشار'
    };

    
    // ********************** EMAIL TO THE ADMIN ********************************
       // email to the admin
       dynamicTemplateData = {
        greeting: `Dear Admin,`,
        content1: `An appointment has been canceled. \n
        User Name : ${
            emailData.userFirstName + ' ' + emailData.userLastName
        }. The reason for the cancellation: ${emailData.note}`,
        content2: `Consultant Name: ${
            emailData.consultantFirstName +
            ' ' +
            emailData.consultantLastName
        }
            Consultant Phone: ${emailData.consultantPhone}
            ${
                emailData.consultantOfficePhone?.length
                    ? `Office Phone: ${emailData.consultantOfficePhone}`
                    : ''
            }`,
        content3: `Date: ${emailData.date} at ${emailData.time}`,
        content4:
            emailData.meetingMode === 'consultant office'
                ? 'Meeting Mode: Consultant Office'
                : 'Meeting Mode: Online',
        content5:
            emailData.meetingMode === 'consultant office'
                ? `${emailData.office_formatted_address}${emailData.office_address_details}`
                : `Meeting Link: ${this.meetingLink}`,
        locationUrl:
            emailData.meetingMode === 'online'
                ? this.meetingLink
                : `https://www.google.com/maps/search/?api=1&query=${emailData.lat},${emailData.lng}`,
        subject: 'Appointment Canceled'
    };
