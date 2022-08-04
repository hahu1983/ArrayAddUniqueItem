export default function ArrayAddUnique(mainArr: any[], addArr: any[], uniqueFields: string[], testFkt?: (a: any, b: any) => boolean) {
  addArr.forEach((aa, index) => {
    let r = mainArr.find((a) => uniqueFields.every(u => aa[u] === a[u]) && (!testFkt || testFkt(a, aa)))
    if (r) {
      mainArr[index] = aa
    } else {
      mainArr.push(aa)
    }
  })
  return mainArr
}
