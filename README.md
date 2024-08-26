#### install nextJS app
1)
create-next-app@14.2.5
Ok to proceed? (y)
√ What is your project named? ... first
√ Would you like to use TypeScript? ... No / Yes       -->   No
√ Would you like to use ESLint? ... No / Yes        -->   Yes
√ Would you like to use Tailwind CSS? ... No / Yes        -->   Yes
√ Would you like to use `src/` directory? ... No / Yes        -->   No
√ Would you like to use App Router? (recommended) ... No / Yes        -->   Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes       -->   No
Creating a new Next.js app in E:\All_programe_new_folder\Next JS-CWH   Singma Web Devlopment\Setup Web\first.


1)
```
// start nextjs app command
npm run dev
```


2)
// create Docker file in ankushgupta-porfolio folder  and write command in Docker file



3)
// run this command in vs code terminal  and create images (nextjs-porfolio)
```
docker build -t nextjs-portfolio .
```


3)
// check you created images
```
docker images
```


4)
```
// images will be run on port 3000 inside docker  but not run in our system
docker run -it nextjs-portfolio
```


5)
// start nextjs app from this command and now also run in our system 
```
docker run -p 3000:3000 nextjs-portfolio
```

5)
//
```
docker exec -it  < id of container >  bash
ls
```


6)
// install nodmon 



7)
//
```
Docker build .
```



#### responsive of tailwind css


1) sm  --> 640px   ( min width )  640 se bade px par ye apply ho jayenga
2) md  --> 768px  ( min width )
3) lg  --> 1024px  ( min width )
4) xl -->   1280px  ( min width )
5) 2xl --> 1536px  ( min width )





####  start type writter effect
// typewritter taken from chatgpt




#### replace  from <a></a> to  <Link></Link>  

1)
```
// import it in hadder
import Link from 'next/link'
```



#### set single page scroll in our next js project

1)
```
npm install react-scroll 
```