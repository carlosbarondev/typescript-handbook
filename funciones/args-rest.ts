(() => {

    const fullName = (firstName: string, ...restArgs: string[]) => {
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent', 'Baron');
    console.log({ superman });

})()