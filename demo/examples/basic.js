module.exports = {
  title: 'Basic',
  schema: {
    '$id': 'https://example.com/person.schema.json',
    '$schema': 'http://json-schema.org/draft-07/schema#',
    'title': 'Person',
    description: 'A few metadata about some person.',
    'type': 'object',
    required: ['firstName', 'lastName'],
    'properties': {
      type: {
        type: 'string',
        const: 'person'
      },
      'formula': {
        type: 'string',
        title: 'Herd size according to the latest MPR',
        description: 'Including the heifers. See the Sustainability monitor in the management program for this',
        'x-formula': 'companyDetails.herdSize + companyDetails.animalsIntroducedPastYear - companyDetails.animalsCulledPastYear',
        contentMediaType: 'text/javascript'
      },
      'firstName': {
        'type': 'string',
        'description': `
The person's first name.

This description can be a long text with markdown content.

  - a list item
  - another one
  `
      },
      'lastName': {
        'type': 'string',
        'description': "The person's last name."
      },
      'password': {
        'type': 'string',
        'x-display': 'password'
      },
      'age': {
        'description': 'Age in years which must be equal',
        'type': 'integer',
        'minimum': 0,
        'maximum': 150
      },
      weight: {
        'description': 'Age in years which must be equal',
        'type': 'number',
        'minimum': 0,
        'maximum': 500,
        'prepend': '<p>asdasd</p><p>asdasdasd<b>sdasd</b></p>'
      },
      'ageInMonths': {
        'type': 'integer',
        'description': 'Age in months',
        'format': 'months'
      },
      'internalKey': {
        'description': 'A property managed only internally by programs and hidden from user',
        'type': 'string',
        'x-display': 'hidden'
      },
      citizen: {
        'description': 'Is this person a citizen of this country.',
        'type': 'boolean'
      },
      'description': {
        'description': 'A longer text for the description.',
        'type': 'string',
        'maxLength': 2000
      },
      'homepage': {
        'description': 'A long string also, but display is forced on single line',
        'type': 'string',
        'maxLength': 2000,
        'x-display': 'single-line'
      }
    }
  },
  data: {
    'formula': '123123123',
    'firstName': 'John',
    'lastName': 'Doe',
    'age': 21.12,
    'weight': 12.245,
    ageInMonths: 123
  }
}
