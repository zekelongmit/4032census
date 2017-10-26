var queryResult;
var button;
var input;
var sel;
var slant;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/ACS_15_5YR_S2401_with_ann_Clean.csv", "csv");
}

function setup() {
  createCanvas(820, 550);
  background(140);
  query();

  button = createButton('RANDOM');
  var clear = createButton('clear');
  button.position(10, 30);
  clear.position(button.x+button.width, 30);
  button.mousePressed(selected_random);
  clear.mousePressed(blank);

  sel = createSelect();
  slant = createSelect();
  slant.position(10,10);
  sel.position(slant.x+slant.width+85, 10);
  sel.option('Select Job');
  sel.option('armed_forces');
  sel.option('civilian_labor_force');
  sel.option('employed');
  sel.option('architecture_and_engineering_occupations');
  sel.option('arts_design_entertainment_sports_and_media_occupations');
  sel.option('building_and_grounds_cleaning_and_maintenance_occupations');
  sel.option('business_and_financial_operations_occupations');
  sel.option('community_and_social_service_occupations');
  sel.option('computer_and_mathematical_occupations');
  sel.option('computer_engineering_and_science_occupations');
  sel.option('construction_and_extraction_occupations');
  sel.option('education_legal_community_service_arts_and_media_occupations');
  sel.option('education_training_and_library_occupations');
  sel.option('farming_fishing_and_forestry_occupations');
  sel.option('fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors');
  sel.option('food_preparation_and_serving_related_occupations');
  sel.option('health_diagnosing_and_treating_practitioners_and_other_technical_occupations');
  sel.option('health_technologists_and_technicians');
  sel.option('healthcare_practitioners_and_technical_occupations');
  sel.option('healthcare_support_occupations');
  sel.option('installation_maintenance_and_repair_occupations');
  sel.option('law_enforcement_workers_including_supervisors');
  sel.option('legal_occupations');
  sel.option('life_physical_and_social_science_occupations');
  sel.option('management_business_and_financial_occupations');
  sel.option('management_business_science_and_arts_occupation');
  sel.option('management_occupations');
  sel.option('material_moving_occupations');
  sel.option('natural_resources_construction_and_maintenance_occupations');
  sel.option('office_and_administrative_support_occupations');
  sel.option('personal_care_and_service_occupations');
  sel.option('production_occupations');
  sel.option('production_transportation_and_material_moving_occupations');
  sel.option('protective_service_occupations');
  sel.option('sales_and_office_occupations');
  sel.option('sales_and_related_occupations');
  sel.option('service_occupations');
  sel.option('transportation_occupations');
  sel.option('labor_force');
  sel.option('not_labor_force');
  sel.option('unemployed');
  sel.changed(selected_job);

  slant.option('Select Slant');
  slant.option('Heavy Male');
  slant.option('Slight Male');
  slant.option('Neutral');
  slant.option('Slight Female');
  slant.option('Heavy Female');
  slant.changed(selected_slant);

  textAlign(CENTER);
  textSize(35);
}

function query() {

  var url= 'https://api.darksky.net/forecast/10f387986cf9ddb5d2600e812e7e15d4/42.361936, -71.097309';
  loadJSON(url, gotData, 'jsonp');
  
}

function gotData(data) {

  // console.log(data);
  queryResult = data;

  // only look at current results:
  var current = queryResult.currently;
  var minute = queryResult.minutely;
  var day = queryResult.daily.data[0];
  var tomorrow = queryResult.daily.data[1];


}

function greet() {
  var name = input.value();
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}

function blank() {
  background(140);
  setup();
}

function selected_job() {
  fill(0);
  var item = sel.value();
  background(140);
  text(item, width/2, 60);
  draw_graph(random(200),random(200));
}
function selected_slant() {
  fill(0);
  var item = slant.value();
  background(140);
  text(item, width/2, 60);
  draw_graph(random(200),random(200));
}
function selected_random() {
  fill(0);
  background(140);
  text("Hey, don't do that yet.", width/2, 60);
  draw_graph(random(200),random(200));
}

function draw_graph(a, b) {
	stroke(0);
	strokeWeight(2);
	fill(230);
	rect(50,70,700,400);
	noStroke();
	fill(100);
	rect(700/3,470,75,-a-b);
	rect(50+2*700/3,470,75,-a-b);
	if (a>b){
		fill(color('red'));
		rect(700/3,470,50,-a);
		fill(color('blue'));
		rect(700/3+25,470,50,-b);
	}
	if (b>a){
		fill(color('red'));
		rect(700/3,470,50,-b);
		fill(color('blue'));
		rect(700/3+25,470,50,-a);
	}
	if (a>b){
		fill(color('blue'));
		rect(50+2*700/3+25,470,50,-a);
		fill(color('red'));
		rect(50+2*700/3,470,50,-b);
	}
	if (b>a){
		fill(color('blue'));
		rect(50+2*700/3+25,470,50,-b);
		fill(color('red'));
		rect(50+2*700/3,470,50,-a);
	}

}
