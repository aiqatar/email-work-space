// this email will be sent to user
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
                ? `You are successfully registered Participant in the following event: <br /> <strong>Event Name</strong> : ${emailData.eventName}`
                : `Thank you for paying the amount of QR ${emailData.amount}. You are successfully registered in the following event: <br /> <strong>Event Name</strong> : ${emailData.eventName}`
            : emailData.isFree
            ? `تم تسجيلك بنجاح في الفعالية التالية: <br /> <strong>اسم الفعالية</strong> : ${emailData.eventNameAr}`
            : `نشكرك على سداد الرسوم (${emailData.amount}) ريال قطري، ونفيدك بأنه تم تسجيلك بنجاح في الفعالية التالية: <br /> <strong>اسم الفعالية</strong> : ${emailData.eventNameAr}`,
    content2:
        emailData.userLanguage == 'en'
            ? `<strong>Date</strong> : ${emailData.eventDate}`
            : `<strong>التاريخ</strong> : ${emailData.eventDate}`,
    content3:
        emailData.userLanguage === 'en'
            ? `<strong>Time</strong> : ${emailData.startTime} - ${emailData.endTime}`
            : `<strong>الوقت</strong> : ${emailData.startTime} - ${emailData.endTime}`,

    content4:
        emailData.userLanguage === 'en'
            ? emailData.isOnline
                ? '<strong>Location</strong> : Online'
                : `<strong>Address</strong> : ${emailData.formaterAddress}`
            : emailData.isOnline
            ? '<strong>المكان</strong> : عبر الإنترنت'
            : `<strong>العنوان</strong> : ${emailData.formaterAddress}`,

    content5:
        emailData.userLanguage === 'en'
            ? emailData.isOnline
                ? 'You can join the event from here:'
                : emailData.location.length > 0
                ? `<strong>Details</strong> : ${emailData.location}`
                : 'You can view the location on map by clicking here:'
            : emailData.isOnline
            ? 'يمكنك حضور الفعالية في ذلك الوقت عبر الرابط التالي:'
            : emailData.location.length > 0
            ? `<strong>التفاصيل</strong> : ${emailData.locationAr}`
            : 'يمكنك مشاهدة الموقع على الخريطة بالضغط على الزر التالي',
    button_text:
        emailData.userLanguage === 'en'
            ? emailData.isOnline
                ? 'Join the Event'
                : 'View Location on Map'
            : emailData.isOnline
            ? 'حضور الفعالية'
            : 'عرض الموقع على الخريطة',
    subject:
        emailData.userLanguage === 'en'
            ? 'Event Participant Registration'
            : 'تسجيل المشاركين في الحدث'
};

//  this email for admin
const adminMsg = {
    to: this.adminEmail,
    from: { email: this.from, name: 'FOZDEAL' },
    dynamicTemplateData: {
        url: `https://fozdeal.com/admin/events`,
        greeting: 'Dear Admin,',
        content1:
            'A participant has been uploaed his project in the following event. and waiting for your action.',
        content2: `<strong>Event name</strong>: ${emailData.eventName}`,
        content3: `<strong>Participant name</strong>: ${
            emailData.userFirstName + ' ' + emailData.userLastName
        }`,
        button_text: 'View Details',

        subject: 'A Participant Has Been Registered'
    },
    templateId: this.templateIds.content3ButtonEn
};