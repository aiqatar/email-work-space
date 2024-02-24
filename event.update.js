// done

const dynamicTemplateData = {
    url: isOnline
        ? emailData.meetingLink
        : `https://www.google.com/maps/search/?api=1&query=${emailData.lat},${emailData.lng}`,
    greeting:
        emailData.userLanguage === 'en'
            ? `Dear ${userFirstName},`
            : `عزيزي ${userFirstName}،`,
    content1:
        emailData.userLanguage === 'en'
            ? `Sorry to inform you that event got modified <br/> <strong>Event name:</strong> ${emailData.eventName}`
            : `نأسف لإبلاغك أنه تم تعديل اسم الحدث: ${emailData.eventNameAr}`,
    content2:
             emailData.userLanguage == 'en'
            ? `<strong>Date:</strong> ${emailData.eventDate}`
            : `<strong>التاريخ:</strong> ${emailData.eventDate}`,
    content3:
        emailData.userLanguage === 'en'
            ? `<strong>Time:</strong> ${emailData.startTime} - ${emailData.endTime}`
            : `<strong>الوقت:</strong> ${emailData.startTime} - ${emailData.endTime}`,

    content4:
        emailData.userLanguage === 'en'
            ? emailData.isOnline
                ? '<strong>Location:</strong> Online'
                : `<strong>Location:</strong> ${emailData.formaterAddress}`
            : emailData.isOnline
            ? 'موقع : عبر الإنترنت'
            : `الموقع: ${emailData.formaterAddress}`,

    content5:
        emailData.userLanguage === 'en'
            ? emailData.isOnline
                ? 'Join the Online event by clicking the following button'
                : emailData.location.length > 0
                ? `Location Details : ${emailData.location}`
                : 'You can view the location on Map by clicking the following button'
            : emailData.isOnline
            ? '"انضم إلى الحدث عبر الإنترنت بالضغط على الزر التالي"'
            : emailData.location.length > 0
            ? `تفاصيل الموقع : ${emailData.locationAr}`
            : 'يمكنك مشاهدة الموقع على الخريطة بالضغط على الزر التالي',
    button_text:
        emailData.userLanguage === 'en'
            ? emailData.isOnline
                ? 'Join Event'
                : 'View Location On Map'
            : emailData.isOnline
            ? 'الانضمام إلى الحدث'
            : 'عرض الموقع على الخريطة',
    subject:
        emailData.userLanguage === 'en'
            ? 'Event Modification'
            : 'تعديل الحدث'
};