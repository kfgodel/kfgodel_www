App.Feature = DS.Model.extend({
  name: DS.attr('string'),
  img: DS.attr('string'),
  description: DS.attr('string'),
});

App.Feature.FIXTURES = [
 {
   id: 1,
   name: 'Universal converter',
   img: 'app/assets/img/conversor_universal.png',
   description: 'Any object into any other type.<br/>Complete built-in conversion set. Easily add your own'
 },
 {
   id: 2,
   name: 'State mapper',
   img: 'app/assets/img/bean_mapper.png',
   description: 'Annotations, or programmatically create DTOs and abstract your implementation from other systems'
 },
 {
   id: 3,
   name: 'Bean manipulator',
   img: 'app/assets/img/bean_manipulator.png',
   description: 'Improve your reflection with Bean2bean internal bean manipulator'
 }
];