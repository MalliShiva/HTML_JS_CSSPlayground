const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


const allDivs = document.querySelectorAll('div');
allDivs.forEach(div => {
    div.addEventListener('click', e=> {
        console.log(e.target);
        test(e);
    })
    
});

function test(e)
{
    var fruits = new Array();
    fruits = ['apple', 'banana', 'Mango'];
    fruits.forEach(fruit => {
        console.log(fruit,e.target);
    });
}



//child.addEventListener("click", e=> {
//     console.log("child bubbling");
// });

// child.addEventListener("click", e=> {
//     console.log("child capturing");
//     e.stopPropagation();
// }, {capture:true});

// parent.addEventListener("click", e=> {
//     console.log("parent bubbling");
// });

// parent.addEventListener("click", e=> {
//     console.log("parent capturing");
// }, {capture:true});

// grandParent.addEventListener("click", e=> {
//     console.log("grandParent bubbling");
// });

// grandParent.addEventListener("click", e=> {
//     console.log("grandParent capturing");
// }, {capture:true});


// document.addEventListener("click", e=> {
//     console.log("document bubbling");
// });


// setTimeout(()=>{
//     document.removeEventListener("click", e=> {
//         console.log("remove doc event listener");
//     });
    
// },20000);



// document.addEventListener("click", e=> {
//     console.log("document capturing");
// }, {capture:true});

//by default capture attribute was false; for caputure events call will come from outer most div to clicked div
//where as for bubbling(means capture:false), call will happen from clicked div to outer most div.

//for adding/ removing the 