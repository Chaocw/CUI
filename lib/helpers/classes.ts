function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

interface Options {
  extra: string | undefined
}


function scopedClassMaker(prefix: string) {
  return function (name?: string, options?: Options) {
    return [[prefix, name].filter(Boolean).join('-'), options && options.extra].filter(Boolean).join(' ');
  };
}

export {scopedClassMaker};

export default classes;