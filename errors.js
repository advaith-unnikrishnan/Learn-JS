try{
    // throw "An exception occured";
    console.log("No Error");
}
catch(ex){
    console.log("An error occured");
    console.log(ex);
}
finally{
    console.log("This will execute even if an error occurs or not");
}