import axios,{AxiosResponse , AxiosError} from 'react-native-axios';

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

export async function ApiCallForID ()  :  Promise<[]>{
    return await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
                                                .then((response : AxiosResponse)  => response.data)
                                                .catch((error :  AxiosError) =>console.log(error) );
                      
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
                    return Promise.all(promises).then(() => wholeStoryArr);
                    }


export function convertWholeToSpecific(arr : Array<any>) : storyInterface[]{
    let specificStory : storyInterface[] = [];
    arr.forEach((item , i) => {
        specificStory.push({id : item.id , title : item.title , url : item.url});
    });
    console.log('Specific Arr ' , specificStory); 
    return specificStory;
}
