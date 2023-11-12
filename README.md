# Web3_project

> Digital asset exchange web side

## Install Prerequisites
The following dependencies are required to run an instance:

1. NodeJS - 9.11.2
2. Npm - 5.6.0

## Build Setup

``` bash
# install dependencies
npm i

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```



## Future
1. Use less uniformly, and the experiment can customize the theme through variable coverage;
2. iview components are referenced on demand;
3. For large files such as exchange.vue, code splitting/componentization;


## Front-end development specifications
1. The page is named using camel case, such as Exchange.vue, WithdrawRecord.vue. The name must be an English word and must correctly describe the function of the module.
2. It is forbidden to use Pinyin in variable names, especially Pinyin abbreviations.
3. When there are many pages, you should use folders for classification.
4. There should be as few data variables in the module as possible. If there are more data variables, they should be managed using sub-objects.


