



const dynamicTemplateData = {
    url: `https://fozdeal.com/projects?user_id=${user_id}&project_status=all`,
    greeting:
        emailData.language === 'en'
            ? `Dear ${name},`
            : `,${name} عزيزي`,
    content1:
        emailData.language === 'en'
            ? `After reviewing your project, we kindly request the following modifications:`
            : ':بعد مراجعتنا لمشروعك، نرجو أن تُجري التعديلات التالية',
    content2: note,
    content3:
        emailData.language === 'en'
            ? `Click on the below button to view your project:`
            : 'انقر فوق الزر أدناه لعرض تفاصيل مشروعك',
    button_text:
        emailData.language === 'en' ? 'View Project' : 'عرض المشروع',
    subject:
        emailData.language === 'en'
            ? 'Modification Required'
            : 'طلب تعديل',

    content4: '',
    content5: ''
};


if (emailData.project_status === 'approved') {
    dynamicTemplateData.content1 =
        emailData.language === 'en'
            ? 'Congratulations! Your project is now live on FOZDEAL.'
            : 'تهانينيا! تم عرض مشروعك على منصة فوزديل';

    dynamicTemplateData.content2 =
        emailData.language === 'en'
            ? 'Click below to view your project details:'
            : 'انقر فوق الزر أدناه لعرض تفاصيل مشروعك';
    dynamicTemplateData.subject =
        emailData.language === 'en'
            ? 'Project Accepted'
            : 'تم قبول المشروع';
}

if (emailData.project_status === 'rejected') {
    dynamicTemplateData.content1 =
        emailData.language === 'en'
            ? "After a careful review, we regret to inform you that your project can't be displayed on FOZDEAL due to the following reason(s):"
            : '';

    dynamicTemplateData.content3 =
        emailData.language === 'en'
            ? 'We appreciate your effort and encourage you to address the feedback and consider submitting again in the future.'
            : 'نحن نقدر جهودك ونشجعك على التعامل مع التعليقات والنظر في إعادة التقديم مرة أخرى في المستقبل.';
    dynamicTemplateData.content4 =
        emailData.language === 'en'
            ? 'Note: You can upload one project at any time.'
            : 'ملاحظة: يمكنك تحميل مشروع واحد في أي وقت.';
    dynamicTemplateData.content5 =
        emailData.language === 'en'
            ? 'Click below to view your project details:'
            : 'انقر فوق الزر أدناه لعرض تفاصيل مشروعك.';

    dynamicTemplateData.subject =
        emailData.language === 'en'
            ? 'Project Replacement'
            : 'استبدال المشروع';
}



