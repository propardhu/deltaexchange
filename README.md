# deltaexchange

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Plaese login using these details
#### username:- admin
#### password:- admin

## For sending an api request I prefer the following model
```
public makeFav(itemId?: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      axios
        .post(ENDPOINT + `/${itemId}/makefav`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
            reject(err);
        });
    });
  }
```
## OR
```
async function test(){
  // call the promise method.
}
```
