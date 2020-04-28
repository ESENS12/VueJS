# node-scheduler-sample
 - Simple scheduler sample using nodejs

# References
 - node-scheduler (https://github.com/node-schedule/node-schedule#readme)
 - forever (https://github.com/foreversd/forever#readme)

# forever usage
 - forever start -w -o out.log -e err.log scheduler.js
 - forever list
 - forever stop 4ACn  (uid) or forever stopall

# Project setup
```
express node-scheduler-sample
```
```
npm install node-schedule
```
```
npm install -g forever
```