package com.karan.loader;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.karan.models.Product;
import com.karan.models.ProductGroup;
import com.karan.service.ProductGroupService;
import com.karan.service.ProductService;


@Component
public class DatabaseLoader implements CommandLineRunner {

	@Autowired
	private ProductGroupService productGroupService;
	
	@Autowired
	private ProductService productService;
	
	public DatabaseLoader(ProductService productService, ProductGroupService productGroupService) {
		this.productService = productService;
		this.productGroupService = productGroupService;
	}
	
	@Override
	public void run(String... args) throws Exception {
		String location = "/media/nagendra/Nagendra/github/STS_Workspace/BackendApi/src/main/java/com/karan/data";
		@SuppressWarnings("resource")
		Stream<Path> paths = Files.walk(Paths.get(location));
		JSONParser parser = new JSONParser();
		
		paths
		.filter(Files :: isRegularFile)
		.forEach(file -> {
			try {
				JSONArray jsonFile = (JSONArray) parser.parse(new FileReader(file.toString()));
				Gson gson = new Gson();
				if (file.toString().contains("ProductGroup.json")) {
					List<ProductGroup> list = new ArrayList<>();
					for(Object object : jsonFile) {
						ProductGroup productGroup = gson.fromJson(object.toString(), ProductGroup.class);
						list.add(productGroup);
					}
					productGroupService.createProductGroup(list);
				} else {
					
					List<Product> list = new ArrayList<>();
					
					for (Object object : jsonFile) {
						Product product = gson.fromJson(object.toString(), Product.class);
						list.add(product);
					}
					productService.createProduct(list);
				}
				
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (ParseException e) {
				e.printStackTrace();
			}
			
		});
	}

}
