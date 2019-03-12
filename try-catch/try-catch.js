let jsonData = '{"name": "Beer"}';
try {
  let user  = JSON.parse(jsonData);
  console.log("Start of try run");
  if(!user.age){
    throw new SyntaxError('Incomplete data: No Age');
  }
  anyRandomFun;
  console.log('End of try catch');
} catch (error) {
  console.log('Error has Occured', error);
} finally{
  console.log('This is always run');
}

console.log("Then execution continues...");