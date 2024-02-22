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
            ? `Sorry to inform you that event got modified event name : ${emailData.eventName}`
            : `نأسف لإبلاغك أنه تم تعديل اسم الحدث: ${emailData.eventNameAr}`,
    content2:
        emailData.userLanguage == 'en'
            ? `Date : ${emailData.eventDate}`
            : `التاريخ: ${emailData.eventDate}`,
    content3:
        emailData.userLanguage === 'en'
            ? `Time : ${emailData.startTime} - ${emailData.endTime}`
            : `الوقت: ${emailData.startTime} - ${emailData.endTime}`,

    content4:
        emailData.userLanguage === 'en'
            ? emailData.isOnline
                ? 'Location : Online'
                : `Location : ${emailData.formaterAddress}`
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