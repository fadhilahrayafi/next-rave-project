
const dayItinarery = {
    name: 'dayItinarery',
    title: 'DayItinarerys',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'detail',
            title: 'Detail',
            type: 'string'
        },
        {
            name: 'places',
            title: 'Places',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'isDepartureTransfer',
            title: 'IsDepartureTransfer',
            type: 'boolean'
        },
        {
            name: 'isWelcome',
            title: 'IsWelcome',
            type: 'boolean'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ],
        },
        {
            name: 'isIncludeTrafalgarDifference',
            title: 'IsIncludeTrafalgarDifference',
            type: 'boolean'
        },
        {
            name: 'acomodation',
            title: 'Acomodation',
            type: 'string'
        },
        {
            name: 'includedMeals',
            title: 'IncludedMeals',
            type: 'string'
        },
        {
            name: 'experiences',
            title: 'Wxperiences',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                    {
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: { hotspot: true },
                        fields: [
                            {
                                name: 'alt',
                                title: 'Alt',
                                type: 'string'
                            }
                        ],
                    },
                  { name: 'tag', type: 'string', title: 'Tag' },
                  { name: 'name', type: 'string', title: 'Name' },
                  { name: 'detail', type: 'string', title: 'Detail' },
                  { name: 'isIncluded', type: 'boolean', title: 'IsIncluded' },
                ],
              },
            ],
          }
    ]
}

export default dayItinarery;