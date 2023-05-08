let data = [
  {
    name: "Abdul Gafur",
    gender: "male",
    date: "2017",
    alias: "Gambo",
    aliasId: "1",
  },
  {
    name: "Abdul Subur",
    gender: "male",
    date: "2017",
    alias: "Sabo",
    aliasId: "2",
  },
  {
    name: "Kamal",
    gender: "male",
    date: "2012",
    alias: "Sheikh",
    aliasId: "3",
  },
  {
    name: "Ameerat",
    gender: "female",
    date: "2011",
    alias: "Baby dollar",
    aliasId: "4",
  },
  {
    name: "Baleqis",
    gender: "female",
    date: "2016",
    alias: "Bb",
    aliasId: "5",
  },
];
let copyOfData;
function mappingTest(id, ob) {
  copyOfData = data.map((one) =>
    one.aliasId === id
      ? {
          ...one,
          name: ob.name ? ob.name : one.name,
          alias: ob.alias ? ob.alias : one.alias,
          gender: ob.gender ? ob.gender : one.gender,
          date: ob.date ? ob.date : one.date,
        }
      : one
  );

  console.log(copyOfData);
}
mappingTest("1", {
  name: "name",
  gender: "gender",
  date: "",
  alias: "alias",
  aliasId: "111",
});

console.log("Round",(7/3))