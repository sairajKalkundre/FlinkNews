import axios,{AxiosResponse} from 'react-native-axios';

interface idInterface {
    id : number,
    value : number
};

interface storyInterface {
    id : number ,
    url : string,
    title : string
};

var arr : number[];
var storyObj : idInterface[] = [];

export async function ApiCallForID ()  :  Promise<any>{
                            await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
                            .then(function (response : AxiosResponse) {
                                        arr = response.data;
                            })
                            .catch(function (error) { 
                                            console.log(error);
                                    });
                            arr.forEach((item , i) => {
                                    storyObj.push({id : i , value : item});
                            });
                            console.log('Array' , storyObj);
                            return ApiCallForData(storyObj);
                        }

export async function ApiCallForData(objID :  Array<idInterface>) : Promise<any>{
                    let wholeStoryArr : Array<any> = [];
                    let promises = [];
                    for (var i = 0; i < objID.length; i++) {
                    let url : string = 'https://hacker-news.firebaseio.com/v0/item/'+objID[i].value+'.json';
                        promises.push(
                            await axios.get<storyInterface[]>(url).then((response : AxiosResponse) => {
                                wholeStoryArr.push(response.data);
                            }));
                        }       
                    Promise.all(promises).then(() => {return convertWholeToSpecific(wholeStoryArr)});
                    }


export function convertWholeToSpecific(arr : Array<any>) : storyInterface[]{
    let specificStory : storyInterface[] = [];
    arr.forEach((item , i) => {
        specificStory.push({id : item.id , title : item.title , url : item.url});
    });
    console.log('Specific Arr ' , specificStory); 
    return specificStory;
}
