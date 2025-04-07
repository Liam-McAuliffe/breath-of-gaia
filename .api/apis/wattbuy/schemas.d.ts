declare const GetElectricity: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
                readonly utility_eid: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "EID of Utility which is getting in electricity info API";
                };
                readonly year_built: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Year the home was built";
                };
                readonly bedrooms: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of bedrooms in the home";
                };
                readonly bathrooms: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of bathrooms in the home";
                };
                readonly sq_ft: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Square footage of livable indoor area";
                };
                readonly stories: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of floors in the home";
                };
                readonly sqft_lot: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Square footage of the lot";
                };
                readonly house_type: {
                    readonly type: "number";
                    readonly enum: readonly [3, 4, 5, 6, 7, 10, 13];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly cooling_info: {
                    readonly type: "string";
                    readonly examples: readonly ["Refrigeration"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly heating_info: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly heating_fuel_source: {
                    readonly type: "string";
                    readonly enum: readonly ["Electricity", "Fuel Oil", "Natural Gas", "None", "Other Fuel", "Propane"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly assuming_kwh_usage: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This field indicates the monthly average kWh usage on the given address. If the date range is provided, the usage ML model will consider it accordingly.";
                };
                readonly assuming_bill: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This field indicates the monthly average bill in dollars on the given address. If the date range is provided, the usage ML model will consider it accordingly. This field is not allowed if `assuming_kwh_usage` is present.";
                };
                readonly start_date: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The start date for the estimation period, formatted as MM/DD/YYYY. This field is required only if either `assuming_kwh_usage` or `assuming_bill` is provided.";
                };
                readonly end_date: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The end date for the estimation period, formatted as MM/DD/YYYY. This field is required only if `start_date` is present.";
                };
                readonly has_ac: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly has_pool: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly has_solar: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly has_green_appliances: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly has_ev_charger: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly has_heat_pump: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly has_other_energy_efficiency_upgrades: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly has_battery_storage: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly estimation: {
                    readonly type: "object";
                    readonly properties: {
                        readonly monthly_usage_estimates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly x: {
                                        readonly type: "string";
                                    };
                                    readonly y: {
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                        readonly annual_usage_estimate: {
                            readonly type: "string";
                        };
                        readonly incomplete_data: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly solar: {
                    readonly type: "object";
                    readonly properties: {
                        readonly solar_production_monthly: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "number";
                            };
                        };
                        readonly cost_savings_monthly: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "number";
                            };
                        };
                        readonly upfront_cost: {
                            readonly type: "number";
                        };
                        readonly payback_period: {
                            readonly type: "number";
                        };
                        readonly solar_property_page: {
                            readonly type: "string";
                        };
                    };
                };
                readonly carbon_foot_print: {
                    readonly type: "object";
                    readonly properties: {
                        readonly annual_carbon_footprint: {
                            readonly type: "number";
                        };
                        readonly baseline_annual_carbon_footprint: {
                            readonly type: "number";
                        };
                        readonly baseline_annual_usage: {
                            readonly type: "number";
                        };
                        readonly estimated_generation_data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                    };
                                    readonly value: {
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly cost: {
                    readonly type: "object";
                    readonly properties: {
                        readonly est_bill_range: {
                            readonly type: "object";
                            readonly properties: {
                                readonly max: {
                                    readonly type: "number";
                                };
                                readonly min: {
                                    readonly type: "number";
                                };
                            };
                        };
                        readonly monthly_cost: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "number";
                            };
                        };
                        readonly avg_rate: {
                            readonly type: "number";
                        };
                    };
                };
                readonly energy_score: {
                    readonly type: "number";
                };
                readonly deregulated: {
                    readonly type: "boolean";
                };
                readonly wb_property_page: {
                    readonly type: "string";
                };
                readonly wattkey: {
                    readonly type: "string";
                    readonly description: "wattkey will be used to call Offers API";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["err"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["\"zip\" is required,\"city\" is required"];
                };
                readonly relavent_addresses: {
                    readonly description: "This propety will present only if mutliple addresses found";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly type: "string";
                            };
                            readonly shortstate: {
                                readonly type: "string";
                            };
                            readonly zip: {
                                readonly type: "string";
                            };
                            readonly county: {
                                readonly type: "string";
                            };
                            readonly formatted_address: {
                                readonly type: "string";
                            };
                            readonly location: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly lat: {
                                        readonly type: "number";
                                    };
                                    readonly lng: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly sub_type: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityCarbonFootprint: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly annual_carbon_footprint: {
                            readonly type: "number";
                        };
                        readonly baseline_annual_carbon_footprint: {
                            readonly type: "number";
                        };
                        readonly baseline_annual_usage: {
                            readonly type: "number";
                        };
                        readonly estimated_generation_data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                    };
                                    readonly value: {
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed"];
                };
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["state is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityEstimation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
                readonly year_built: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The year the home was built. Should be four digits.";
                };
                readonly bedrooms: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of bedrooms in the home.";
                };
                readonly bathrooms: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of bathrooms in the home.";
                };
                readonly sq_ft: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The square footage of the home.";
                };
                readonly stories: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of stories in the home.";
                };
                readonly house_type: {
                    readonly type: "string";
                    readonly enum: readonly ["house", "apartment"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The house type. Either house or apartment.";
                };
                readonly heating_fuel_source: {
                    readonly type: "string";
                    readonly enum: readonly ["Electricity", "Fuel Oil", "Natural Gas", "None", "Other Fuel", "Propane"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly assuming_kwh_usage: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This field indicates the monthly average kWh usage on the given address. If the date range is provided, the usage ML model will consider it accordingly.";
                };
                readonly assuming_bill: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This field indicates the monthly average bill in dollars on the given address. If the date range is provided, the usage ML model will consider it accordingly. This field is not allowed if `assuming_kwh_usage` is present.";
                };
                readonly start_date: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The start date for the estimation period, formatted as MM/DD/YYYY. This field is required only if either `assuming_kwh_usage` or `assuming_bill` is provided.";
                };
                readonly end_date: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The end date for the estimation period, formatted as MM/DD/YYYY. This field is required only if `start_date` is present.";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly state_name: {
                    readonly type: "string";
                    readonly description: "The name of the state where the address is located.";
                };
                readonly graph_data: {
                    readonly type: "array";
                    readonly description: "An array of objects representing the estimated electricity usage for the home for each month of the year.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly x: {
                                readonly type: "string";
                                readonly description: "The name of the month.";
                            };
                            readonly y: {
                                readonly type: "number";
                                readonly description: "The estimated electricity usage for the month in kilowatt-hours (kWh).";
                            };
                        };
                    };
                };
                readonly est_bill_amount: {
                    readonly type: "object";
                    readonly description: "An object containing the estimated monthly electricity bill amount for the home.";
                    readonly properties: {
                        readonly min: {
                            readonly type: "number";
                            readonly description: "The estimated minimum monthly bill amount in USD.";
                        };
                        readonly max: {
                            readonly type: "number";
                            readonly description: "The estimated maximum monthly bill amount in USD.";
                        };
                    };
                };
                readonly monthly_cost: {
                    readonly type: "array";
                    readonly description: "An array of monthly bill amount in USD.";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly avg_cost: {
                    readonly type: "number";
                    readonly description: "The average cost of electricity per kilowatt-hour (kWh) for the address.";
                };
                readonly est_usage: {
                    readonly type: "number";
                    readonly description: "The estimated total electricity usage for the home for the year in kilowatt-hours (kWh).";
                };
                readonly interpolated: {
                    readonly type: "boolean";
                };
                readonly is_apartment_or_unit: {
                    readonly type: "boolean";
                };
                readonly wattkey: {
                    readonly type: "string";
                    readonly description: "The unique identifier for the address used in the estimation.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed"];
                };
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["zip is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityGenerationRate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly state: {
                    readonly type: "string";
                    readonly examples: readonly ["nc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Required, short form two characters state abbreviation";
                };
                readonly utility_id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Required, Numeric String of utilityID, provided by EIA for every utility in the US. (A listing of Utilities IDs can be found here: https://www.eia.gov/electricity/data/eia861/)";
                };
            };
            readonly required: readonly ["state"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed"];
                };
                readonly error_messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["state is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityInfo: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
                readonly zip_fallback: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search utility by zipcode if address search fails";
                };
                readonly housing_chars: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly default: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly utility_list: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly default: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of energy service for the address, either regulated or deregulated.\n\n`regulated` `deregulated`";
                    readonly enum: readonly ["regulated", "deregulated"];
                };
                readonly esiid: {
                    readonly type: "string";
                    readonly description: "The Electric Service Identifier (ESID) of the address.";
                };
                readonly exact_match: {
                    readonly type: "boolean";
                    readonly description: "Indicates whether the search results are an exact match to the address searched.";
                };
                readonly exact_match_reason: {
                    readonly type: "string";
                    readonly description: "The reason for the exact match result, if applicable.\n\n`success` `multiple_addresses_found` `unknown` `address_unavailable`";
                    readonly enum: readonly ["success", "multiple_addresses_found", "unknown", "address_unavailable"];
                };
                readonly wattkey: {
                    readonly type: "string";
                    readonly description: "The unique identifier for the address used in the estimation.";
                };
                readonly utility_info: {
                    readonly type: "array";
                    readonly description: "An array of objects containing information about the addresses's utility provider.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly utility_name: {
                                readonly type: "string";
                            };
                            readonly utility_id: {
                                readonly type: "string";
                            };
                            readonly place: {
                                readonly type: "string";
                                readonly description: "Place or Service Terrirtory";
                            };
                            readonly website: {
                                readonly type: "string";
                            };
                            readonly phone_number: {
                                readonly type: "string";
                            };
                            readonly facebook: {
                                readonly type: "string";
                            };
                            readonly twitter: {
                                readonly type: "string";
                            };
                            readonly signup_url: {
                                readonly type: "string";
                            };
                            readonly signup_phone_number: {
                                readonly type: "string";
                            };
                            readonly default_rate: {
                                readonly type: "number";
                                readonly description: "The default rate (per kWh) for the address.";
                            };
                            readonly distributor_monthly_rate: {
                                readonly type: "number";
                            };
                            readonly distributor_rate_per_kwh: {
                                readonly type: "number";
                            };
                            readonly time_of_use_rate: {
                                readonly type: "number";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed | Invalid Input"];
                };
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["zip is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityInfoEsi: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly page: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly total_count: {
                    readonly type: "integer";
                };
                readonly page_count: {
                    readonly type: "number";
                };
                readonly page_number: {
                    readonly type: "number";
                };
                readonly has_next_page: {
                    readonly type: "boolean";
                };
                readonly exact_match: {
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly esiid: {
                                readonly type: "string";
                                readonly description: "ESI ID";
                            };
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly type: "string";
                            };
                            readonly zipcode: {
                                readonly type: "string";
                            };
                            readonly premise_type: {
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["Active"];
                            };
                            readonly utility: {
                                readonly type: "string";
                            };
                            readonly plans_available: {
                                readonly type: "boolean";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed"];
                };
                readonly error_messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["zip is required", "state is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityRetailRates: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly utilityID: {
                    readonly type: "integer";
                    readonly examples: readonly ["6452"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Required, Numeric String of utilityID, provided by EIA for every utility in the US. (A listing of Utilities IDs can be found here: https://www.eia.gov/electricity/data/eia861/)";
                };
                readonly state: {
                    readonly type: "string";
                    readonly examples: readonly ["fl"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Required, short form two characters state abbreviation";
                };
                readonly baseline_zone: {
                    readonly type: "string";
                    readonly examples: readonly ["Q"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional, baseline allocation zone if applicable. This is assigned to most customers in CA based on where they live, and can be found on the bill.";
                };
                readonly verified_from: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional, Epoch time, default 1 year ago, example: 1664514205";
                };
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Non negative page number, default 1";
                };
            };
            readonly required: readonly ["utilityID", "state"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "number";
                    readonly description: "Number of rates available for given query";
                };
                readonly next: {
                    readonly type: "boolean";
                    readonly description: "Whether there is at least one more page of data available";
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "One page of available rates for this query";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly _id: {
                                readonly type: "string";
                                readonly description: "The internal ID for this particular rate update. Note that this ID will change with every rate change, even if it is marketed as the same rate by the utility. For an ID that attempts to link rates with the same name, use the \"rate_id\"";
                            };
                            readonly utility_id: {
                                readonly type: "number";
                                readonly description: "The EID of the utility where this rate is available";
                            };
                            readonly rate_name: {
                                readonly type: "string";
                                readonly description: "The marketed name for this rate";
                            };
                            readonly rate_structure: {
                                readonly type: "array";
                                readonly description: "The structure and pricing details for the rate. A rate structure could have multiple objects that represent different combinations of seasons, days of the week, and hours of the day. Taken together, you can expect for each hour of the year to be represented by exactly one of these objects (i.e. there will be no gaps or overlaps)";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of this particular rate object (eg \"summer peak\", \"weekends\", \"full rate\")";
                                        };
                                        readonly frequency: {
                                            readonly type: "string";
                                            readonly description: "The granularity with which this price object is aggregated. This typically represents how often the user is billed and is usually monthly";
                                        };
                                        readonly availability: {
                                            readonly type: "array";
                                            readonly description: "Information about the times, days, and seasons this particular rate object is available";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly start_date: {
                                                        readonly type: "number";
                                                        readonly description: "The day of the start_month this object begins taking effect";
                                                    };
                                                    readonly start_month: {
                                                        readonly type: "number";
                                                        readonly description: "The month of the year this object begins taking effect";
                                                    };
                                                    readonly start_time: {
                                                        readonly type: "number";
                                                        readonly description: "The start of the time of day that this object represents, denoted as number of minutes past midnight.";
                                                    };
                                                    readonly start_time_string: {
                                                        readonly type: "string";
                                                        readonly description: "The start of the time of day that this object represents, formatted as \"HH:mm\"";
                                                    };
                                                    readonly end_date: {
                                                        readonly type: "number";
                                                        readonly description: "The day of the end_month this object begins taking effect";
                                                    };
                                                    readonly end_month: {
                                                        readonly type: "number";
                                                        readonly description: "The month of the year this object begins taking effect";
                                                    };
                                                    readonly end_time: {
                                                        readonly type: "number";
                                                        readonly description: "The end of the time of day that this object represents, denoted as number of minutes past midnight.";
                                                    };
                                                    readonly end_time_string: {
                                                        readonly type: "string";
                                                        readonly description: "The end of the time of day that this object represents, formatted as \"HH:mm\"";
                                                    };
                                                    readonly days_of_week: {
                                                        readonly type: "array";
                                                        readonly description: "An array of 7 numbers, where each item represents a day of the week starting with Sunday. 1s represent days where this object is applicable, 0s represent days where this object is not applicable";
                                                        readonly items: {
                                                            readonly type: "number";
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        readonly unit: {
                                            readonly type: "string";
                                            readonly description: "Unit of electricity that applies to the following fields in price object. Typically kwh for classic usage-based rates, less commonly kw for demand-based charges.";
                                        };
                                        readonly price: {
                                            readonly type: "array";
                                            readonly description: "Array for calculating cost during the time defined by availability above. Each item in the array represents a tier of usage.";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly minimum_usage: {
                                                        readonly type: "number";
                                                        readonly description: "The usage amount (in units defined above) where this price item begins to take effect.";
                                                    };
                                                    readonly maximum_usage: {
                                                        readonly type: "number";
                                                        readonly description: "The usage amount (in units defined above) where the following price item begins to take effect. Note that if there is no upper limit, this will be null.";
                                                    };
                                                    readonly amount: {
                                                        readonly type: "number";
                                                        readonly description: "The actual base cost for usage in this usage tier. This is represented as cents per unit, where unit is defined above.";
                                                    };
                                                    readonly adjustment: {
                                                        readonly type: "number";
                                                        readonly description: "The total additional adjustment amounts that are applied on top of the amount above, in cents per unit. For most use cases, this number should be added to \"amount\" for a full look at the user's bill.";
                                                    };
                                                };
                                            };
                                        };
                                        readonly adjustment_types: {
                                            readonly type: "string";
                                            readonly description: "An unstructured string that represents the types of adjustments that are represented above. This field exists where available but should not be relied on at all times.";
                                        };
                                        readonly adjustment_urls: {
                                            readonly type: "array";
                                            readonly description: "A list of source URLs where adjustment data can be found";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly utility_name: {
                                readonly type: "string";
                                readonly description: "Name of utility that offers this rate";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "U.S. state where this rate is available";
                            };
                            readonly source: {
                                readonly type: "object";
                                readonly description: "URLs where rate information can be found";
                                readonly properties: {
                                    readonly rate: {
                                        readonly type: "string";
                                        readonly description: "URL where the actual rate document can be found";
                                    };
                                    readonly rate_parent: {
                                        readonly type: "string";
                                        readonly description: "URL where general rate information for this utility can be found";
                                    };
                                };
                            };
                            readonly structure: {
                                readonly type: "string";
                                readonly description: "Enum for the type of rate this is. Possible values are \"fixed\" or \"TOU\"";
                            };
                            readonly minimum_bill: {
                                readonly type: "object";
                                readonly description: "The minimum amount that a customer must pay regardless of usage, per defined frequency";
                                readonly properties: {
                                    readonly amount: {
                                        readonly type: "number";
                                        readonly description: "The minimum bill amount, in cents";
                                    };
                                    readonly frequency: {
                                        readonly type: "string";
                                        readonly description: "How often the minimum bill is charged, when necessary";
                                    };
                                };
                            };
                            readonly customer_charge: {
                                readonly type: "object";
                                readonly description: "The charge that a customer must pay, in addition to their usage costs, per defined frequency";
                                readonly properties: {
                                    readonly frequency: {
                                        readonly type: "string";
                                        readonly description: "How often the customer charge is billed";
                                    };
                                    readonly amount: {
                                        readonly type: "number";
                                        readonly description: "The customer charge amount, in cents";
                                    };
                                };
                            };
                            readonly is_default: {
                                readonly type: "boolean";
                                readonly description: "Whether or not this is the standard rate that a customer is signed up for when starting service with the utility";
                            };
                            readonly effective_start_date: {
                                readonly type: "string";
                                readonly description: "The earliest date that we are aware of this rate being available. Note that this rate is sometimes defined in rate docuemnts, but is otherwise set to the first date that WattBuy imported the rate.";
                            };
                            readonly retrieved_at: {
                                readonly type: "string";
                                readonly description: "The date that WattBuy imported the rate for verification";
                            };
                            readonly verified_at: {
                                readonly type: "string";
                                readonly description: "The date that WattBuy verified the rate. This is the same date the rate became available via API.";
                            };
                            readonly effective_end_date: {
                                readonly type: "string";
                                readonly description: "The date on which this rate will no longer be available. If this is not known, this field will be null";
                            };
                            readonly tariff_code: {
                                readonly type: "string";
                                readonly description: "The short tariff code provided by the utility (e.g. \"E-1\")";
                            };
                            readonly zone: {
                                readonly type: "string";
                                readonly description: "The zone within a utility where this rate is available. If not applicable, this will be an empty string.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricitySolarEstimation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly description: "The unique identifier for the address used in the estimation.";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly solar_production_monthly: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "number";
                            };
                            readonly description: "Monthly solar production values in kWh for each month, January through December.";
                        };
                        readonly cost_savings_monthly: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "number";
                            };
                            readonly description: "Monthly cost savings in USD for each month, January through December, if the solar panel system is installed.";
                        };
                        readonly upfront_cost: {
                            readonly type: "number";
                            readonly description: "The upfront cost of installing the recommended solar panel system in USD.";
                        };
                        readonly payback_period: {
                            readonly type: "number";
                            readonly description: "The estimated payback period for the solar panel system in years. The payback period is the length of time it takes for the cost savings to equal the upfront cost.";
                        };
                        readonly payback_period_with_incentives: {
                            readonly type: "number";
                            readonly description: "The estimated payback period with incentives for the solar panel system in years. The payback period with incentives is the length of time it takes for the cost savings to equal the upfront cost taking the federal incentives into account.";
                        };
                        readonly final_system_size_kw: {
                            readonly type: "number";
                        };
                        readonly price_after_incentives: {
                            readonly type: "number";
                        };
                        readonly incentives: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly geo: {
                                        readonly type: "string";
                                    };
                                    readonly authority: {
                                        readonly type: "string";
                                    };
                                    readonly category: {
                                        readonly type: "string";
                                    };
                                    readonly percentage: {
                                        readonly type: "number";
                                    };
                                    readonly max_limit: {
                                        readonly type: "number";
                                    };
                                    readonly amount: {
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetForm: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly plan_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["plan_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly supplierForm: {
                    readonly type: "object";
                    readonly properties: {
                        readonly form: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly tos: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                };
                readonly requiredLoa: {
                    readonly type: "boolean";
                };
                readonly uan_validations: {
                    readonly type: "array";
                    readonly description: "This property is optional";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly lengthValidation: {
                                readonly type: "string";
                            };
                            readonly regex: {
                                readonly type: "string";
                            };
                            readonly utilityId: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["validation_failed"];
                };
                readonly error_messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["plan_id is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOffers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
                readonly language: {
                    readonly type: "string";
                    readonly enum: readonly ["en", "es"];
                    readonly default: "en";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Language code to be used for offer URLs. Supported languages are English (en) and Spanish (es).";
                };
                readonly is_renter: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly utility_eid: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "EID of Utility which is getting in electricity info API";
                };
                readonly category: {
                    readonly type: "string";
                    readonly enum: readonly ["electricity_plans", "rooftop_solar", "smart_plugs", "community_solar", "demand_response", "smart_thermostat", "light_bulbs", "ev_chargers", "heat_pump", "heat_pump_water_heater"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The category of offers to return. All offers will be returned if category is not provided.";
                };
                readonly all: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If true will return all the electricity_plans, Otherwise, will return only recommended plans";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["ok"];
                };
                readonly wattkey: {
                    readonly type: "string";
                };
                readonly offers: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly offer_id: {
                                readonly type: "string";
                            };
                            readonly offer_name: {
                                readonly type: "string";
                            };
                            readonly offer_desc: {
                                readonly type: "string";
                            };
                            readonly offer_cta: {
                                readonly type: "string";
                            };
                            readonly offer_image: {
                                readonly type: "string";
                            };
                            readonly offer_category: {
                                readonly type: "string";
                            };
                            readonly cost: {
                                readonly type: "number";
                            };
                            readonly link: {
                                readonly type: "string";
                            };
                            readonly kwh_saved: {
                                readonly type: "number";
                            };
                            readonly kwh_generated: {
                                readonly type: "number";
                            };
                            readonly monthly_savings: {
                                readonly type: "number";
                            };
                            readonly item_count: {
                                readonly type: "number";
                            };
                            readonly payback_period: {
                                readonly type: "number";
                            };
                            readonly carbon_fp_saved: {
                                readonly type: "number";
                            };
                            readonly form: {
                                readonly type: "boolean";
                            };
                            readonly offer_data: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["err"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["zip is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["err"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal server error"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly order_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["order_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["PENDING", "FAILED", "SUBMITTED", "ACTIVE", "CLOSED"];
                    readonly description: "`PENDING` `FAILED` `SUBMITTED` `ACTIVE` `CLOSED`";
                };
                readonly agent: {
                    readonly type: "string";
                    readonly enum: readonly ["Distributor", "Supplier", "Customer"];
                    readonly description: "`Distributor` `Supplier` `Customer`";
                };
                readonly sub_status: {
                    readonly type: "string";
                    readonly enum: readonly ["Processing", "Account Number", "Confirm Plan", "Deposit Required", "Validation", "Approved", "Approved with Deposit Needed", "Approved with Deposit Waiver Needed", "Active", "Expired", "Declined", "Canceled"];
                    readonly description: "`Processing` `Account Number` `Confirm Plan` `Deposit Required` `Validation` `Approved` `Approved with Deposit Needed` `Approved with Deposit Waiver Needed` `Active` `Expired` `Declined` `Canceled`";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly type: "string";
                    readonly enum: readonly ["P1", "P2", "P3", "P4", "P5", "F1", "F2", "F3", "F4", "S1", "S2", "S3", "S4", "A1", "C1", "C2", "C3"];
                    readonly description: "`P1` `P2` `P3` `P4` `P5` `F1` `F2` `F3` `F4` `S1` `S2` `S3` `S4` `A1` `C1` `C2` `C3`";
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly properties: {
                        readonly deposit_paid: {
                            readonly type: "boolean";
                        };
                        readonly deposit_amount: {
                            readonly type: "number";
                        };
                        readonly deposit_payment_link: {
                            readonly type: "string";
                        };
                        readonly deposit_text: {
                            readonly type: "string";
                        };
                        readonly service_start_date: {
                            readonly type: "string";
                        };
                        readonly account_number: {
                            readonly type: "string";
                        };
                        readonly order_id: {
                            readonly type: "string";
                            readonly description: "Wattb order id";
                        };
                        readonly reference_id: {
                            readonly type: "string";
                            readonly description: "Supplier order id";
                        };
                        readonly secondary_id: {
                            readonly type: "object";
                            readonly description: "optional id";
                            readonly properties: {
                                readonly key: {
                                    readonly type: "string";
                                };
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly error_message: {
                            readonly type: "string";
                        };
                        readonly status_reason: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostCreditCheck: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly form: {
                readonly type: "object";
                readonly properties: {
                    readonly esiid: {
                        readonly type: "string";
                        readonly examples: readonly [10443720008394064];
                    };
                    readonly serviceAddress1: {
                        readonly type: "string";
                        readonly examples: readonly ["3820 vitruvian way apt 353"];
                    };
                    readonly serviceAddress2: {
                        readonly type: "string";
                    };
                    readonly serviceCity: {
                        readonly type: "string";
                        readonly examples: readonly ["addison"];
                    };
                    readonly serviceZip: {
                        readonly type: "string";
                        readonly examples: readonly [75001];
                    };
                    readonly serviceState: {
                        readonly type: "string";
                        readonly examples: readonly ["TX"];
                    };
                    readonly firstName: {
                        readonly type: "string";
                        readonly examples: readonly ["swaroop"];
                    };
                    readonly lastName: {
                        readonly type: "string";
                        readonly examples: readonly ["gajula"];
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly examples: readonly ["deposit@wattbuy.com"];
                    };
                    readonly phoneNumber: {
                        readonly type: "string";
                        readonly examples: readonly [4038442564];
                    };
                    readonly socialSecurity: {
                        readonly type: "string";
                        readonly examples: readonly [123123111];
                    };
                    readonly serviceStartDate: {
                        readonly type: "string";
                        readonly examples: readonly ["05/05/2021"];
                    };
                    readonly dob: {
                        readonly type: "string";
                        readonly examples: readonly ["04/04/1993"];
                    };
                };
                readonly required: readonly ["esiid", "serviceAddress1", "serviceCity", "serviceState", "serviceZip", "firstName", "lastName", "phoneNumber", "email", "socialSecurity", "serviceStartDate", "dob"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly plan_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["plan_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly supported: {
                    readonly type: "boolean";
                };
                readonly pay_deposit: {
                    readonly type: "boolean";
                };
                readonly deposit_amount: {
                    readonly type: "string";
                };
                readonly autopay_required: {
                    readonly type: "boolean";
                };
                readonly deposit_text: {
                    readonly type: "string";
                };
                readonly invalid_user: {
                    readonly type: "boolean";
                };
                readonly wattb_order_id: {
                    readonly type: "string";
                };
                readonly supplier: {
                    readonly type: "string";
                };
                readonly utility: {
                    readonly type: "string";
                };
                readonly plan_name: {
                    readonly type: "string";
                };
                readonly plan_cost: {
                    readonly type: "string";
                };
                readonly plan_type: {
                    readonly type: "string";
                };
                readonly cost: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostElectricityRequestRate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["rate_name", "utility_name"];
        readonly properties: {
            readonly utility_name: {
                readonly type: "string";
            };
            readonly eid: {
                readonly type: "integer";
            };
            readonly state: {
                readonly type: "string";
            };
            readonly rate_name: {
                readonly type: "string";
            };
            readonly tariff_code: {
                readonly type: "string";
            };
            readonly rate_url: {
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly rateId: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly status: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostElectricitySolarIncentives: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["state"];
        readonly properties: {
            readonly state: {
                readonly type: "string";
                readonly description: "Two-letter state code";
                readonly examples: readonly ["CA"];
            };
            readonly address: {
                readonly type: "string";
                readonly description: "Street address";
                readonly examples: readonly ["123 Main St"];
            };
            readonly city: {
                readonly type: "string";
                readonly description: "City name";
                readonly examples: readonly ["San Francisco"];
            };
            readonly zipcode: {
                readonly type: "string";
                readonly description: "5-digit zip code";
                readonly examples: readonly ["94105"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly authority: {
                        readonly type: "string";
                        readonly examples: readonly ["Federal"];
                    };
                    readonly link: {
                        readonly type: "string";
                        readonly examples: readonly ["https://www.energy.gov/eere/solar/homeowners-guide-federal-tax-credit-solar-photovoltaics"];
                    };
                    readonly geo: {
                        readonly type: "string";
                        readonly examples: readonly ["USA"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["Offered by the federal government, the incentive allows homeowners to claim 30% of their total system cost as a tax credit."];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["err"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["state is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["err"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostForm: {
    readonly body: {
        readonly type: "object";
        readonly description: "parameters changed based on GET /form";
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly plan_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly ip_address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly send_email: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly default: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["plan_id", "ip_address"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["PENDING", "FAILED", "SUBMITTED", "ACTIVE", "CLOSED"];
                    readonly description: "`PENDING` `FAILED` `SUBMITTED` `ACTIVE` `CLOSED`";
                };
                readonly agent: {
                    readonly type: "string";
                    readonly enum: readonly ["Distributor", "Supplier", "Customer"];
                    readonly description: "`Distributor` `Supplier` `Customer`";
                };
                readonly sub_status: {
                    readonly type: "string";
                    readonly enum: readonly ["Processing", "Account Number", "Confirm Plan", "Deposit Required", "Validation", "Approved", "Approved with Deposit Needed", "Approved with Deposit Waiver Needed", "Active", "Expired", "Declined", "Canceled"];
                    readonly description: "`Processing` `Account Number` `Confirm Plan` `Deposit Required` `Validation` `Approved` `Approved with Deposit Needed` `Approved with Deposit Waiver Needed` `Active` `Expired` `Declined` `Canceled`";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly type: "string";
                    readonly enum: readonly ["P1", "P2", "P3", "P4", "P5", "F1", "F2", "F3", "F4", "S1", "S2", "S3", "S4", "A1", "C1", "C2", "C3"];
                    readonly description: "`P1` `P2` `P3` `P4` `P5` `F1` `F2` `F3` `F4` `S1` `S2` `S3` `S4` `A1` `C1` `C2` `C3`";
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly properties: {
                        readonly deposit_paid: {
                            readonly type: "boolean";
                        };
                        readonly deposit_amount: {
                            readonly type: "number";
                        };
                        readonly deposit_payment_link: {
                            readonly type: "string";
                        };
                        readonly deposit_text: {
                            readonly type: "string";
                        };
                        readonly service_start_date: {
                            readonly type: "string";
                        };
                        readonly account_number: {
                            readonly type: "string";
                        };
                        readonly order_id: {
                            readonly type: "string";
                            readonly description: "Wattb order id";
                        };
                        readonly reference_id: {
                            readonly type: "string";
                            readonly description: "Supplier order id";
                        };
                        readonly secondary_id: {
                            readonly type: "object";
                            readonly description: "optional id";
                            readonly properties: {
                                readonly key: {
                                    readonly type: "string";
                                };
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly error_message: {
                            readonly type: "string";
                        };
                        readonly status_reason: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["validation_failed"];
                };
                readonly error_messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["plan_id is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPlansLink: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly first_name: {
                readonly type: "string";
            };
            readonly last_name: {
                readonly type: "string";
            };
            readonly email: {
                readonly type: "string";
            };
            readonly phone_number: {
                readonly type: "string";
            };
            readonly dob: {
                readonly type: "string";
                readonly description: "MM/DD/YYYY";
            };
            readonly service_start_date: {
                readonly type: "string";
                readonly description: "MM/DD/YYYY";
            };
            readonly service_type: {
                readonly type: "string";
                readonly enum: readonly ["switch", "move"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
                readonly category: {
                    readonly type: "string";
                    readonly enum: readonly ["community_solar", "demand_response", "ev_chargers", "heat_pump", "heat_pump_water_heater", "light_bulbs", "rooftop_solar", "smart_plugs", "smart_thermostat"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The category of offers to return. All offers will be returned if category is not provided.";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly description: "custom url with partner code and customer_id";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed"];
                };
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["first_name is required", "last_name is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetElectricity, GetElectricityCarbonFootprint, GetElectricityEstimation, GetElectricityGenerationRate, GetElectricityInfo, GetElectricityInfoEsi, GetElectricityRetailRates, GetElectricitySolarEstimation, GetForm, GetOffers, GetStatus, PostCreditCheck, PostElectricityRequestRate, PostElectricitySolarIncentives, PostForm, PostPlansLink };
