const initialState = {
  current: [
    {
      'coord':
      {'lon':30.79,'lat':50.51},
      'weather':
          [
            {'id':701,'main':'Mist','description':'mist','icon':'50d'}
          ],
      'base':'stations',
      'main':
      {'temp':278.15,'pressure':1007,'humidity':100,'temp_min':278.15,'temp_max':278.15},
      'visibility':2500,'wind':{'speed':5,'deg':180},'clouds':{'all':90},
      'dt':1488868200,
      'sys':{'type':1,'id':7348,'message':0.055,'country':'UA','sunrise':1488860843,
        'sunset':1488901739},
      'id':711390,
      'name':'Brovary',
      'cod':200}
  ],
  storageData: [
      'Kiev'
  ],
  result: [
    {
      'coord':
      {'lon':30.79,'lat':50.51},
      'weather':
          [
            {'id':701,'main':'Mist','description':'mist','icon':'50d'}
          ],
      'base':'stations',
      'main':
      {'temp':278.15,'pressure':1007,'humidity':100,'temp_min':278.15,'temp_max':278.15},
      'visibility':2500,'wind':{'speed':5,'deg':180},'clouds':{'all':90},
      'dt':1488868200,
      'sys':{'type':1,'id':7348,'message':0.055,'country':'UA','sunrise':1488860843,
        'sunset':1488901739},
      'id':711390,
      'name':'Brovary',
      'cod':200
    }
  ]
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case 'GET_CURRENT':
      return { ...state, current: action.result }
    case 'REFRESH':
      return { ...state, result: action.result }
    case 'ADD':
      return { ...state, storageData: action.result }
    case 'REMOVE':
      return { ...state, storageData: action.result }
    default:
      return state;
  }
}
