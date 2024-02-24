
// ------------ event registeration ----------------
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
            ? emailData.isFree
                ? `You are successfully registered in the event ${emailData.eventName}`
                : `You are successfully register in the event ${emailData.eventName} and the fees is ${emailData.amount} QR`
            : emailData.isFree
            ? ` تم تسجيلك بنجاح في فعالية ${emailData.evnetNameAr}`
            : ` تم تسجيلك بنجاح في فعالية ${emailData.evnetNameAr} ونشكرك على سداد المبلغ ${emailData.amount} ريال قطري`,
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
            ? 'الموقع : عبر الإنترنت'
            : `الموقع: ${emailData.formaterAddress}`,

    content5:
        emailData.userLanguage === 'en'
            ? emailData.isOnline
                ? 'Join the Online event by clicking the following button'
                : emailData.location.length > 0
                ? `Location Details : ${emailData.location}`
                : 'You can view the location on Map by clicking here:'
            : emailData.isOnline
            ? '"يمكنك حضور الفعالية عبر الإنترنت بالضغط على الزر التالي"'
            : emailData.location.length > 0
            ? `تفاصيل الموقع : ${emailData.locationAr}`
            : 'يمكنك مشاهدة الموقع على الخريطة بالضغط على الزر التالي',
    button_text:
        emailData.userLanguage === 'en'
            ? emailData.isOnline
                ? 'Join the Event'
                : 'View Location'
            : emailData.isOnline
            ? 'حضور الفعالية'
            : 'عرض الموقع على الخريطة',
    subject:
        emailData.userLanguage === 'en'
            ? 'Event Registration'
            : 'التسجيل في الفعالية'
};


