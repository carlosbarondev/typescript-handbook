(() => {
    const batman: string = 'Batman';
    const goku: string = "Goku";
    const yoda: string = `yoda`;
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || 'No está presente');
})()