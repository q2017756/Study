const userName = 'xiaoming';
const userAge = 18;
console.log(111, __DEV__)
const featureFlags = () => {
    console.warn(userName)
    __DEV__ && console.log(userName)
}

featureFlags();