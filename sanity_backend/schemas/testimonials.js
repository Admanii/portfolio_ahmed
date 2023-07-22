export default {
    name: 'testimonials',
    type: 'document',
    title: 'Testimonials',
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspots: true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string',
        },
    ],
}